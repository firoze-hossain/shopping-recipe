pipeline {
environment {
    dockerimagename = "firozehossain01/shopping"
    dockerImage = ""
    }
    agent {label 'master'}
    stages{
        stage('Checkout Source'){
            steps{
                checkout([$class: 'GitSCM', branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[credentialsId: 'devopslogin', url: 'https://github.com/firoze-hossain/shopping-recipe.git']]])
            }
        }
        stage('Build docker image'){
            steps{
                script{
                dockerImage = docker.build dockerimagename
                }
            }
        }
        stage('Push image to Hub'){
        environment{
        registryCredential = 'dockerhublogin'
        }
            steps{
                script{
                    docker.withRegistry( 'https://registry.hub.docker.com', registryCredential ) {
                               dockerImage.push("latest")

}
               }
           }
        }
        stage('Deploy to k8s'){
            steps{
                script{
                    kubernetesDeploy (configs: 'deploymentservice.yaml',kubeconfigId: 'kubernetes')
                }
            }
        }
    }
}
