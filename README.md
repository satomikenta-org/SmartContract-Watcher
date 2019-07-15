
Smart Contract Event Watcher

.env 
```
MYSQL_HOST=""
MYSQL_USER=""
MYSQL_PASSWORD=""
MYSQL_PORT=""
MYSQL_DATABASE=""
CONTRACT_ADDRESS=""
GETH_URL=""
```

@ Start
* $ docker-compose up -d


@ Transfer Logs in EC2(amazon linux2) to CloudWatch
* Attach LoggingRole which can access Cloudwatch to EC2.
* $ sudo yum update -y
* $ sudo yum install -y awslogs
* $ sudo vi /etc/awslogs/awscli.conf  (change region to desired cloudwatch region.)
* $ sudo vi /etc/awslogs/awslogs.conf  (modify path of log file) 
* ex)
```
[/home/ec2-user/app/eth-listener/log/system.log]
datetime_format = %b %d %H:%M:%S
file = /home/ec2-user/app/eth-listener/log/system.log
buffer_duration = 5000
log_stream_name = {instance_id}
initial_position = start_of_file
log_group_name = /home/ec2-user/app/eth-listener/log/system.log
```
* $ sudo systemctl start awslogsd
* $ sudo systemctl enable awslogsd.service
