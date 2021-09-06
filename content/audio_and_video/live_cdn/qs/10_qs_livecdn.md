---
title: "入门指引"
draft: false
collapsible: false
weight: 10
---

本章节指导您如何快速使用视频直播服务。

<img src="../../_images/qs_flowchart.png" style="zoom:60%;" />

操作流程说明，如下表所示。

| 操作                                                 | 操作说明                                                     |
| ---------------------------------------------------- | ------------------------------------------------------------ |
| [创建直播域名](../../usermanual/10_create_livevideo) | 您需要将已备案的域名添加到青云视频直播服务中，包含推流域名和播流域名。 |
| [配置 CNAME](../../usermanual/20_configure_cname)    | 推流域名和播流域名添加成功后，视频直播会为其自动分配对应的 CNAME 地址。<br />您需要在域名 DNS 服务商处为推流域名和播流域名配置 CNAME 解析，开启直播推流加速和播放加速。 |
| [生成流地址](../../usermanual/30_generate_address)   | 创建直播域名并配置 CNAME 值后，需要通过地址生成器为推流域名和播流域名生成推流地址和播流地址。 |




