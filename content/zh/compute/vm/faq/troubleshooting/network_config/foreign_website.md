---
title: "访问国外网站加载缓慢怎么？"
weight: 40
draft: false
keyword: 云计算, 云服务器，外网
---

## 问题背景

 这是由于服务器位于中国大陆，访问的网站为国外，访问加载时解析的 IP 首选为国际带宽线路，而国际带宽线路分布在全球各地。访问的过程中不可避免的会出现饶节的情况，因此增加了访问加载的时间。

## 解决方法

### 使用非中国大陆地区资源

如您有访问中国大陆外网站的需求，建议使用亚太2区或者雅加达区资源，该区域位于其他海外，更适合有海外访问需求的客户。

### 修改DNS

在不方便更换海外区域的情况下，可以修改 DNS 解决，如将 DNS 服务器 IP 修改为 114.114.114.114 或8.8.8.8

以下为 CentOS 7 修改方法：

```
# vi /etc/resolv.conf 
# Generated by NetworkManager
search localdomain. pek3.petaexpress.com.
nameserver 8.8.8.8
nameserver 114.114.114.114
                                                                                                               
```

### 其他方法

1. 使用 ping 命令判断访问速度最快的服务器 IP 地址

   以下示例为 Windows 访问 GitHub 为例，CMD 命令行中 ping github.com 域名地址

   ```
   C:\Users\Administrator>ping github.com
   
   正在 Ping github.com [13.250.177.223] 具有 32 字节的数据:
   来自 13.250.177.223 的回复: 字节=32 时间=81ms TTL=36
   来自 13.250.177.223 的回复: 字节=32 时间=94ms TTL=36
   来自 13.250.177.223 的回复: 字节=32 时间=81ms TTL=36
   来自 13.250.177.223 的回复: 字节=32 时间=81ms TTL=36
   
   13.250.177.223 的 Ping 统计信息:
       数据包: 已发送 = 4，已接收 = 4，丢失 = 0 (0% 丢失)，
   往返行程的估计时间(以毫秒为单位):
       最短 = 81ms，最长 = 94ms，平均 = 84ms
       
   C:\Users\Administrator>ping github.com    
       正在 Ping github.com [13.229.188.59] 具有 32 字节的数据:
   来自 13.229.188.59 的回复: 字节=32 时间=145ms TTL=35
   来自 13.229.188.59 的回复: 字节=32 时间=162ms TTL=35
   来自 13.229.188.59 的回复: 字节=32 时间=147ms TTL=35
   来自 13.229.188.59 的回复: 字节=32 时间=183ms TTL=35
   
   13.229.188.59 的 Ping 统计信息:
       数据包: 已发送 = 4，已接收 = 4，丢失 = 0 (0% 丢失)，
   往返行程的估计时间(以毫秒为单位):
       最短 = 145ms，最长 = 183ms，平均 = 159ms
   ```

2. 重复多次执行 ping  github.com ，记录下一跳TTL最小且最稳定的 IP 地址。

   例如本次示例中 TTL 值最小的 IP 为 13.229.188.59。

3. 修改 Hosts文件

   Windows 为例，打开 C:\Windows\System32\drivers\etc\ ，将之前复制的 IP 地址以如下方式写入 hosts 文件末行。

   ```
   13.229.188.59  github.com  
   ```
