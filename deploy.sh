# 部署business文件夹脚本
# 修改用户组权限 chown -R www:ftp wechat
npm run build
rsync -avz --delete dist/ root@39.107.59.233:/yjdata/www/www/ROOT/refactoring/wechat/
expect chown.exp
