# full-stack-docker
## Docker basics
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

To get new images run:
*docker pull image_name_here*
```
docker pull node
```
<img width="1281" alt="image" src="https://user-images.githubusercontent.com/49013231/183328841-48aee81c-874b-49eb-b5ab-a8dc893ec36e.png">

When a image is ran a container is made from that image:
<img width="845" alt="image" src="https://user-images.githubusercontent.com/49013231/183329207-ef9045fe-7fae-43ac-9a54-ff3f214ef342.png">
<img width="851" alt="image" src="https://user-images.githubusercontent.com/49013231/183329372-d28c73b4-db8f-4510-a00a-4002998ea19b.png">

### Dockerfile (set of instructions to create a docker image)
![image](https://user-images.githubusercontent.com/49013231/183332980-c0724bcc-9fd6-49f4-a780-ff63f52cc376.png)

After a Dockerfile is created, you can run this command to create an image:
*docker build -t image-name path-to-directory-with-dockerfile*

```
docker build -t myApp .
```


### Containers (box to run app with everything it needs)
Containers run independently from any of the processes on your computer:

<img width="827" alt="image" src="https://user-images.githubusercontent.com/49013231/183327500-d5188c14-c0a6-4f20-bdd2-0ed29d968e7f.png">

### Overview
The app can run the same exact way on every machine because the image kept the exact versions of everything we need.
<img width="1077" alt="image" src="https://user-images.githubusercontent.com/49013231/183327536-956366fe-1883-4e88-8c81-a4cd395d5d34.png">
