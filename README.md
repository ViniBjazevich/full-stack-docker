# full-stack-docker
## Docker Terminal Commands
To get new images run:
```
docker pull image_name_here
```
List all docker images:
```
docker images
```
List running containers:
```
docker ps
```
List all containers:
```
docker ps -a
```

To create a image:
 - **docker build -t image-name  path-to-directory-with-dockerfile**
```
docker build -t api_image .
```

To create a container: 
- --name gives the container its name
- -p allows you to map a localhost port to the container port
- -d allows you to run the container detatched from the terminal (you can still run commands in the terminall while the container is running)
```
docker run --name api_container1 -p 8080:8080 -d api_image
```
- -v creates a volume. This maps a folder on our computer to a folder in the container allowing it to pick up changes we make. The second -v creates an anonymous volume which maps the node_modules in our container to folder managed by docker. This allows us to delete our node_modules locally and not delete our node_modules in our container.
```
docker run --name api_container1 -p 8080:8080 -v /Users/vinibjazevich/Code/docker-fullstack/api:/app -v /app/node_modules -d api_image
```

To stop a container: 
```
docker stop api_container1
```

To start a existing container: 
```
docker start api_container1
```

To delete an image: 
```
docker image rm api_image
```

To delete an container: 
```
docker container rm api_container1
```

Delete all images, containers, and clear cache:
```
docker system prune
```

## Docker Basics
### Images (blueprints for containers)
Images contain the following:
- runtime environment
- application code
- any dependencies
- extra configuration (env variables)
- commands
- own file system independent from computer

<img width="1007" alt="image" src="https://user-images.githubusercontent.com/49013231/183326854-036303b4-a427-490c-a24a-75840a0a96ba.png">

Parent images:
<img width="1004" alt="image" src="https://user-images.githubusercontent.com/49013231/183328138-95178739-358b-4e42-b33b-6d308a69e0f9.png">

You can get docker images from docker hub: https://hub.docker.com/search?q=

<img width="1281" alt="image" src="https://user-images.githubusercontent.com/49013231/183328841-48aee81c-874b-49eb-b5ab-a8dc893ec36e.png">

When a image is ran a container is made from that image:
<img width="845" alt="image" src="https://user-images.githubusercontent.com/49013231/183329207-ef9045fe-7fae-43ac-9a54-ff3f214ef342.png">
<img width="851" alt="image" src="https://user-images.githubusercontent.com/49013231/183329372-d28c73b4-db8f-4510-a00a-4002998ea19b.png">

The app can run the same exact way on every machine because the image kept the exact versions of everything we need.
<img width="1077" alt="image" src="https://user-images.githubusercontent.com/49013231/183327536-956366fe-1883-4e88-8c81-a4cd395d5d34.png">

## Dockerfile (set of instructions to create a docker image)
![image](https://user-images.githubusercontent.com/49013231/183332980-c0724bcc-9fd6-49f4-a780-ff63f52cc376.png)


## Containers (box to run app with everything it needs)
Containers run independently from any of the processes on your computer:

<img width="827" alt="image" src="https://user-images.githubusercontent.com/49013231/183327500-d5188c14-c0a6-4f20-bdd2-0ed29d968e7f.png">

To create a new container you need to run an image:
<img width="1098" alt="image" src="https://user-images.githubusercontent.com/49013231/183465444-5b69e7f8-601c-475c-bcf5-615f07486e28.png">

Here you can give the container a name, choose its ports, and provide environment variables.
- The left port is our localhost port and the right port is the container port
<img width="556" alt="image" src="https://user-images.githubusercontent.com/49013231/183465526-a84e6129-69a1-4e80-b7e5-f7de869e83b7.png">
