# TodoLokiJS
关于javascript的数据库的学习


lokiJS是一个用javascript编写的文本数据库,数据格式将会保存为json的格式.
lokiJS学习官网: http://lokijs.org/#/docs#db

lokiJS 主要有几种类型
db          类型
负责 打开 关闭 存储 设置 数据库和集合,类似于 数据库的控制文件,配置文件.

collection  类型
负责 管理 CRUD 数据,将数据存储在集合中.每一个集合类似于数据库的一张表.

ResultSet   类型
ResultSet负责为collection提供一个链式的查询方式,可以进行组合查询.

DynamicView 类型
DynamicView类型为查询提供一个动态的视图,当集合变化时,DynamicView就会进行动态获取最新符合的数据.
