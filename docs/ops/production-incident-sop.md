# 生产环境故障排查标准操作流程(SOP)

## 1. 故障识别与报告
- 监控系统告警确认
- 用户反馈收集
- 故障现象记录(时间、影响范围、错误表现)

## 2. 初步响应
- 组建应急小组(开发、运维、测试)
- 确定故障等级(P0-P4)
- 建立沟通渠道(钉钉/微信群)

## 3. 日志收集
```bash
# 应用日志
kubectl logs -f [pod-name] --tail=1000 > app.log

# 系统日志
journalctl -u [service-name] --since "1 hour ago" > system.log

# 数据库日志
pg_dump -U [user] -h [host] [dbname] > db_backup.sql
```

## 4. 问题定位
- 错误日志分析
- 代码回溯(最近变更)
- 依赖服务检查
- 性能指标分析(CPU、内存、磁盘IO)

## 5. 临时解决方案
- 服务回滚
- 限流降级
- 配置热更新

## 6. 根本原因分析
- 5Why分析法
- 时间线梳理
- 复现路径验证

## 7. 修复与验证
- 代码修复
- 单元测试/集成测试
- 灰度发布验证

## 8. 事后复盘
- 编写事故报告
- 制定改进措施
- 更新监控策略
- 知识库文档更新

## 9. 预防措施
- 增加监控指标
- 完善测试用例
- 定期演练
- 容量规划优化


## 附录：常用命令
```bash
# 查看服务状态
systemctl status [service]

# 网络诊断
ping [host]
traceroute [host]
netstat -tulnp

# 性能分析
top -H -p [pid]
jstack [pid] > thread_dump.log
