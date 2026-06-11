pipeline {
    agent any

    stages {
        stage('Check Environment') {
            steps {
                script {
                    echo "Node Name: ${env.NODE_NAME}"

                    if (isUnix()) {
                        echo "Running on Linux/Unix agent"
                    } else {
                        echo "Running on Windows agent"
                    }
                }
            }
        }
    }
}

// pipeline {
//     agent any

//     stages {

//         stage('Install Dependencies') {
//             steps {
//                 bat 'npm install'
//             }
//         }

//         stage('Install Playwright Browsers') {
//             steps {
//                 bat 'npx playwright install'
//             }
//         }

//         stage('Run Tests') {
//             steps {
//                 bat 'npx playwright test'
//             }
//         }
//     }
// }