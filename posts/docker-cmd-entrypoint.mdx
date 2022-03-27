---
title: "Docker CMD vs ENTRYPOINT"
description: ""
date: 2022-03-16T15:37:56.398Z
tags: ["docker"]
cover:
  image: "/blogImages/"
  alt: ""
  caption: ""
draft: true
showToc: false
---

Finding the difference between `CMD` and `ENTRYPOINT` in Dockerfile.

```dockerfile
FROM ubuntu:latest

ENTRYPOINT ls
```

```
docker image build --tag experiment-1

docker run experiment-1
```

runs `ls` inside `/`

```dockerfile
FROM ubuntu:latest

ENTRYPOINT ["ls"]
```

same

```
FROM ubuntu:latest

ENTRYPOINT ["ls", "-al"]
```

works as expected

```
FROM ubuntu:latest

ENTRYPOINT ls -al
```

Things will **not** be passed as arguments to the entrypoint

```
FROM ubuntu:latest

ENTRYPOINT ["ls", "-al"]
```

Things will be passed as arguments to the entrypoint

```
docker container run --rm experiment-4:latest /bin
```

```
FROM ubuntu:latest

CMD ["/bin"]

ENTRYPOINT ["ls", "-al"]
```

`/bin` will be passed to the entrypoint as an argument, but it can be overrided.