import {createFileRoute} from '@tanstack/react-router';
export const Route=createFileRoute('/api/contact')({server:{handlers:{POST:({request})=>new Response(null,{status:307,headers:{Location:new URL('/api/public/contact',request.url).toString()}})}}});
