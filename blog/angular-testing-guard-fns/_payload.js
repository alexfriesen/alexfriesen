export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa){return {data:{"content-query-eGa0L0JHYi":{_path:"\u002Fblog\u002Fangular-testing-guard-fns",_dir:"blog",_draft:v,_partial:v,_locale:"en",_empty:v,title:p,description:"How to unit test Guard Functions in Angular.",excerpt:{type:H,children:[{type:a,tag:I,props:{id:w},children:[{type:b,value:p}]},{type:a,tag:i,props:{},children:[{type:b,value:J}]},{type:a,tag:q,props:{id:x},children:[{type:b,value:y}]},{type:a,tag:i,props:{},children:[{type:b,value:K}]},{type:a,tag:j,props:{code:z,filename:L,language:r},children:[{type:a,tag:s,props:{},children:[{type:a,tag:j,props:{__ignoreMap:l},children:[{type:b,value:z}]}]}]},{type:a,tag:q,props:{id:A},children:[{type:b,value:B}]},{type:a,tag:i,props:{},children:[{type:b,value:M}]},{type:a,tag:i,props:{},children:[{type:b,value:N},{type:a,tag:t,props:{},children:[{type:b,value:O}]},{type:b,value:P},{type:a,tag:t,props:{},children:[{type:b,value:Q}]},{type:b,value:R}]},{type:a,tag:j,props:{code:C,filename:S,language:r},children:[{type:a,tag:s,props:{},children:[{type:a,tag:j,props:{__ignoreMap:l},children:[{type:b,value:C}]}]}]}]},date:"12.29.2022 20:00",image:"\u002Fimages\u002Fangular.svg",body:{type:H,children:[{type:a,tag:I,props:{id:w},children:[{type:b,value:p}]},{type:a,tag:i,props:{},children:[{type:b,value:J}]},{type:a,tag:q,props:{id:x},children:[{type:b,value:y}]},{type:a,tag:i,props:{},children:[{type:b,value:K}]},{type:a,tag:j,props:{code:z,filename:L,language:r},children:[{type:a,tag:s,props:{},children:[{type:a,tag:j,props:{__ignoreMap:l},children:[{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:f},children:[{type:b,value:"export"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:f},children:[{type:b,value:D}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"authGuard"}]},{type:a,tag:c,props:{class:f},children:[{type:b,value:":"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:E},children:[{type:b,value:"CanActivateFn"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:f},children:[{type:b,value:F}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:" ("}]},{type:a,tag:c,props:{class:E},children:[{type:b,value:"route"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:T}]},{type:a,tag:c,props:{class:E},children:[{type:b,value:"state"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:") "}]},{type:a,tag:c,props:{class:f},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:n}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:u}]},{type:a,tag:c,props:{class:f},children:[{type:b,value:D}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:k},children:[{type:b,value:"auth"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:f},children:[{type:b,value:F}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:U}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"(AuthService);"}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:u}]},{type:a,tag:c,props:{class:f},children:[{type:b,value:"return"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:" auth.isLoggedIn;"}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"};"}]}]}]}]}]},{type:a,tag:q,props:{id:A},children:[{type:b,value:B}]},{type:a,tag:i,props:{},children:[{type:b,value:M}]},{type:a,tag:i,props:{},children:[{type:b,value:N},{type:a,tag:t,props:{},children:[{type:b,value:O}]},{type:b,value:P},{type:a,tag:t,props:{},children:[{type:b,value:Q}]},{type:b,value:R}]},{type:a,tag:j,props:{code:C,filename:S,language:r},children:[{type:a,tag:s,props:{},children:[{type:a,tag:j,props:{__ignoreMap:l},children:[{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:g},children:[{type:b,value:"describe"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:o}]},{type:a,tag:c,props:{class:V},children:[{type:b,value:"'TourStausGuard'"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:W}]},{type:a,tag:c,props:{class:f},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:n}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:u}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"beforeEach"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:X}]},{type:a,tag:c,props:{class:f},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:n}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"        TestBed."}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"configureTestingModule"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"({"}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"            providers: ["}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"                {"}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"                    provide: AuthService,"}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"                    useValue: { isLoggedIn: "}]},{type:a,tag:c,props:{class:k},children:[{type:b,value:Y}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:" },"}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"                },"}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"            ],"}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:Z}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:_}]}]},{type:a,tag:c,props:{class:e},children:[]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:u}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"it"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:o}]},{type:a,tag:c,props:{class:V},children:[{type:b,value:"'should allow accessing active tours'"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:W}]},{type:a,tag:c,props:{class:f},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:n}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"        "}]},{type:a,tag:c,props:{class:f},children:[{type:b,value:D}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:k},children:[{type:b,value:"envInjector"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:f},children:[{type:b,value:F}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:" TestBed."}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:U}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"(EnvironmentInjector);"}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"        envInjector."}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"runInContext"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:X}]},{type:a,tag:c,props:{class:f},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:n}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"            "}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"expect"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:o}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"guard"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:o}]},{type:a,tag:c,props:{class:k},children:[{type:b,value:$}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:T}]},{type:a,tag:c,props:{class:k},children:[{type:b,value:$}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"))."}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"toBe"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:o}]},{type:a,tag:c,props:{class:k},children:[{type:b,value:Y}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:");"}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:Z}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:_}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"});"}]}]}]}]}]},{type:a,tag:"style",children:[{type:b,value:".ct-1b8bee{color:#A5D6FF}\n.ct-dbdb5e{color:#79C0FF}\n.ct-a6f0b8{color:#FFA657}\n.ct-5772da{color:#D2A8FF}\n.ct-f68aa2{color:#C9D1D9}\n.ct-ca554e{color:#FF7B72}"}]}],toc:{title:l,searchDepth:G,depth:G,links:[{id:w,depth:G,text:p,children:[{id:x,depth:aa,text:y},{id:A,depth:aa,text:B}]}]}},_type:"markdown",_id:"content:blog:2.angular-testing-guard-fns.md",_source:"content",_file:"blog\u002F2.angular-testing-guard-fns.md",_extension:"md"}},prerenderedAt:1672427067717}}("element","text","span","ct-f68aa2","line","ct-ca554e","ct-5772da"," ","p","code","ct-dbdb5e","","=\u003E"," {","(","Angular: Testing Guard Functions","h3","ts","pre","code-inline","    ",false,"angular-testing-guard-functions","example-canactivatefn","Example CanActivateFn","export const authGuard: CanActivateFn = (route, state) =\u003E {\n    const auth = inject(AuthService);\n    return auth.isLoggedIn;\n};\n","testing","Testing","describe('TourStausGuard', () =\u003E {\n    beforeEach(() =\u003E {\n        TestBed.configureTestingModule({\n            providers: [\n                {\n                    provide: AuthService,\n                    useValue: { isLoggedIn: true },\n                },\n            ],\n        });\n    });\n\n    it('should allow accessing active tours', () =\u003E {\n        const envInjector = TestBed.inject(EnvironmentInjector);\n        envInjector.runInContext(() =\u003E {\n            expect(guard(null, null)).toBe(true);\n        });\n    });\n});\n","const","ct-a6f0b8","=",2,"root","h2","Recently the Angular Team added a new and handy way to define Route Guards in a functional way.","Here is a simple CanActivateFn example:","auth.guard.ts","As you can see from the example above we are not dealing with an Injectable and need to run need a way to execute our Function within a DI Context.","Luckily we grab an ","EnvironmentInjector"," from ","TestBed"," to run our function with all our Providers.","auth.guard.spec.ts",", ","inject","ct-1b8bee",", () ","(() ","true","        });","    });","null",3))