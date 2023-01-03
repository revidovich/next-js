## React + Next js (ssr) Chat
  
Чтобы потестить чат нужно cклонировать приложение,
перейти на ветку 'ws',
запустить сервер npx nodemon server.js,  
запустить клиент npm run dev,  
Открыть приложение в разных вкладках, таким образом у вас будет live-чат.
  
<img width="743" alt="image" src="https://user-images.githubusercontent.com/63742797/210438729-9487dac8-b17d-4a6b-8f7d-ace42d079135.png">
  

[Ссылка на проект без вебсокетов](https://next-f8ailyqpn-revidovich.vercel.app), Vercel не поддерживает кастомный сервер.   

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
  
Решить проблему с SVG  
    
### Ход работ:  

npx create-next-app next-js  
% code .  
получение данных с jsonplaceholder API  
тайпскрипт  
сервер на Node.js  
вебсокеты https://www.npmjs.com/package/socket.io  
