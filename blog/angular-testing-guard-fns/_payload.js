export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O){return {data:{"content-query-eGa0L0JHYi":{_path:"\u002Fblog\u002Fangular-testing-guard-fns",_dir:"blog",_draft:q,_partial:q,_locale:m,_empty:q,title:r,description:"How to unit test Guard Functions in Angular.",date:"12.29.2022 20:00",image:"\u002Fimages\u002Fangular.svg",body:{type:"root",children:[{type:a,tag:"h2",props:{id:w},children:[{type:c,value:r}]},{type:a,tag:n,props:{},children:[{type:c,value:"Recently the Angular Team added a new and handy way to define Route Guards in a functional way."}]},{type:a,tag:x,props:{id:y},children:[{type:c,value:z}]},{type:a,tag:n,props:{},children:[{type:c,value:"Here is a simple CanActivateFn example:"}]},{type:a,tag:o,props:{code:"export const authGuard: CanActivateFn = (route, state) =\u003E {\n    const auth = inject(AuthService);\n    return auth.isLoggedIn;\n};\n",filename:"auth.guard.ts",language:A,meta:"[auth.guard.ts]"},children:[{type:a,tag:B,props:{},children:[{type:a,tag:o,props:{__ignoreMap:m},children:[{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:f},children:[{type:c,value:"export"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:h}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:s}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:h}]},{type:a,tag:b,props:{class:g},children:[{type:c,value:"authGuard"}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:":"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:h}]},{type:a,tag:b,props:{class:t},children:[{type:c,value:"CanActivateFn"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:h}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:u}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:" ("}]},{type:a,tag:b,props:{class:t},children:[{type:c,value:"route"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:C}]},{type:a,tag:b,props:{class:t},children:[{type:c,value:"state"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:") "}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:j}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:k}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:p}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:s}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:h}]},{type:a,tag:b,props:{class:i},children:[{type:c,value:"auth"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:h}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:u}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:h}]},{type:a,tag:b,props:{class:g},children:[{type:c,value:D}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:"(AuthService);"}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:p}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:"return"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:" auth.isLoggedIn;"}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"};"}]}]}]}]}]},{type:a,tag:x,props:{id:E},children:[{type:c,value:F}]},{type:a,tag:n,props:{},children:[{type:c,value:"As you can see from the example above we are not dealing with an Injectable and need to run need a way to execute our Function within a DI Context."}]},{type:a,tag:n,props:{},children:[{type:c,value:"Luckily we grab an "},{type:a,tag:G,props:{},children:[{type:c,value:"EnvironmentInjector"}]},{type:c,value:" from "},{type:a,tag:G,props:{},children:[{type:c,value:"TestBed"}]},{type:c,value:" to run our function with all our Providers."}]},{type:a,tag:o,props:{code:"describe('TourStausGuard', () =\u003E {\n    beforeEach(() =\u003E {\n        TestBed.configureTestingModule({\n            providers: [\n                {\n                    provide: AuthService,\n                    useValue: { isLoggedIn: true },\n                },\n            ],\n        });\n    });\n\n    it('should allow accessing active tours', () =\u003E {\n        const envInjector = TestBed.inject(EnvironmentInjector);\n        envInjector.runInContext(() =\u003E {\n            expect(guard(null, null)).toBe(true);\n        });\n    });\n});\n",filename:"auth.guard.spec.ts",language:A,meta:"[auth.guard.spec.ts]"},children:[{type:a,tag:B,props:{},children:[{type:a,tag:o,props:{__ignoreMap:m},children:[{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:g},children:[{type:c,value:"describe"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:l}]},{type:a,tag:b,props:{class:H},children:[{type:c,value:"'TourStausGuard'"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:I}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:j}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:k}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:p}]},{type:a,tag:b,props:{class:g},children:[{type:c,value:"beforeEach"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:J}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:j}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:k}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"        TestBed."}]},{type:a,tag:b,props:{class:g},children:[{type:c,value:"configureTestingModule"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:"({"}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"            providers: ["}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"                {"}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"                    provide: AuthService,"}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"                    useValue: { isLoggedIn: "}]},{type:a,tag:b,props:{class:i},children:[{type:c,value:K}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:" },"}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"                },"}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"            ],"}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:L}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:M}]}]},{type:a,tag:b,props:{class:e},children:[]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:p}]},{type:a,tag:b,props:{class:g},children:[{type:c,value:"it"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:l}]},{type:a,tag:b,props:{class:H},children:[{type:c,value:"'should allow accessing active tours'"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:I}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:j}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:k}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"        "}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:s}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:h}]},{type:a,tag:b,props:{class:i},children:[{type:c,value:"envInjector"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:h}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:u}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:" TestBed."}]},{type:a,tag:b,props:{class:g},children:[{type:c,value:D}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:"(EnvironmentInjector);"}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"        envInjector."}]},{type:a,tag:b,props:{class:g},children:[{type:c,value:"runInContext"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:J}]},{type:a,tag:b,props:{class:f},children:[{type:c,value:j}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:k}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"            "}]},{type:a,tag:b,props:{class:g},children:[{type:c,value:"expect"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:l}]},{type:a,tag:b,props:{class:g},children:[{type:c,value:"guard"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:l}]},{type:a,tag:b,props:{class:i},children:[{type:c,value:N}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:C}]},{type:a,tag:b,props:{class:i},children:[{type:c,value:N}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:"))."}]},{type:a,tag:b,props:{class:g},children:[{type:c,value:"toBe"}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:l}]},{type:a,tag:b,props:{class:i},children:[{type:c,value:K}]},{type:a,tag:b,props:{class:d},children:[{type:c,value:");"}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:L}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:M}]}]},{type:a,tag:b,props:{class:e},children:[{type:a,tag:b,props:{class:d},children:[{type:c,value:"});"}]}]}]}]}]},{type:a,tag:"style",children:[{type:c,value:".ct-e740b8{color:#A5D6FF}\n.ct-9fa65b{color:#79C0FF}\n.ct-7af9d0{color:#FFA657}\n.ct-418dc7{color:#D2A8FF}\n.ct-5ecd41{color:#C9D1D9}\n.ct-fc7c0f{color:#FF7B72}"}]}],toc:{title:m,searchDepth:v,depth:v,links:[{id:w,depth:v,text:r,children:[{id:y,depth:O,text:z},{id:E,depth:O,text:F}]}]}},_type:"markdown",_id:"content:blog:2.angular-testing-guard-fns.md",_source:"content",_file:"blog\u002F2.angular-testing-guard-fns.md",_extension:"md"}},prerenderedAt:1676977066400}}("element","span","text","ct-5ecd41","line","ct-fc7c0f","ct-418dc7"," ","ct-9fa65b","=\u003E"," {","(","","p","code","    ",false,"Angular: Testing Guard Functions","const","ct-7af9d0","=",2,"angular-testing-guard-functions","h3","example-canactivatefn","Example CanActivateFn","ts","pre",", ","inject","testing","Testing","code-inline","ct-e740b8",", () ","(() ","true","        });","    });","null",3))