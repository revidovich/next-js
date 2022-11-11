## Next js

Ссылка на проект без вебсокетов: (https://next-f8ailyqpn-revidovich.vercel.app/)[https://next-f8ailyqpn-revidovich.vercel.app/ ] 

Чтобы посмотреть чат нужно  
Склонировать приложение,  
запустить сервер npx nodemon server.js  
запустить клиент npm run dev 

### В планах  
 
Закинуть pathname в мобикс,
```
  useEffect( () => {
      console.log('00000', timer)
    if (pathname === '/404') {
      timer = setTimeout(() => {
        if (pathname === '/404') {
          router.push('/')
        }
      }, 3000);
    } else {
      console.log('f', timer)
      window.clearTimeout(timer);
    }
  }, [])
```
  
ssr (by 1 - getServerSideProps) vs ssg (all - getStaticPaths)  
  
Решить проблему с svg  
    
Ход работ:  

npx create-next-app next-js  
% code .  
get data from jsonplaceholder API  
added TS  
added Node.js server  
added https://www.npmjs.com/package/socket.io  