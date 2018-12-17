## Idelnemolko project readme

Before start, please make sure that docker is instlled on the deployment machine.

## Predeployment and deploy
0. Check if project runs by entering `docker ps` in terminal
  Here you would see somth like this:
  
  `CONTAINER ID        IMAGE                   COMMAND                  CREATED             STATUS              PORTS                     NAMES
`

You need to find record with 0.0.0.0:80->80 and stop it by typing `docker stop <record_name>`, where <record_name> - the name in the NAMES column
1. clone this repository to the production server (or make `git pull origin master` if already cloned):
  `https://github.com/Goldsipa/idealnemoloko-react.git`
2. go to the project root and run:
  `bash predeploy.sh`
3. After build's finished run this command to check if anyth. is ok:
  `bash deploy-pending.sh`
4. Check if you could go by this link in your browser: `http://54.37.138.23/`
  if everuthing is ok press Ctrl+C and go to the next step
5. Run `bash run-app.sh`.
  Check if you could go by this link in your browser: `http://54.37.138.23/`
