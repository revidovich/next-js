## Next js

npx create-next-app next-js  
% code .  

Возможно закину pathname в мобикс?
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

ssr (by 1) vs ssg (all)