## Next js

Ссылка: [https://next-f8ailyqpn-revidovich.vercel.app/](https://next-f8ailyqpn-revidovich.vercel.app/) 

npx create-next-app next-js  
% code .  

### В планах  

Закинуть pathname в мобикс?
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
    
добавила тс
