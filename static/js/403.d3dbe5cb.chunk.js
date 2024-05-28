"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[403],{4403:(e,n,i)=>{i.r(n),i.d(n,{default:()=>g});i(5043),i(6942);var l=i(5438),s=i(8911),t=i(6446),r=i(1906),c=i(3216),o=i(2110),d=i(6591),a=i(6494),x=i(5865),h=i(9285),m=i(6990),j=i(8903),A=i(3003),p=i(2074),u=i(579);const y=e=>{let{item:n,onRemove:i,handleQuantityChange:l}=e;return(0,u.jsxs)(o.A,{sx:{display:"flex",flexDirection:{xs:"column",sm:"column",md:"row"},mb:2},children:[(0,u.jsx)(d.A,{component:"img",sx:{width:150,objectFit:"contain"},image:n.image,alt:n.name}),(0,u.jsxs)(t.A,{sx:{display:"flex",flexDirection:"column",flex:1},children:[(0,u.jsxs)(a.A,{children:[(0,u.jsx)(x.A,{variant:"h6",children:n.name}),(0,u.jsxs)(x.A,{variant:"body2",color:"textSecondary",children:["Colour: ",null===n||void 0===n?void 0:n.color]}),(0,u.jsx)(x.A,{variant:"body2",color:"textSecondary",children:"In Stock"}),(0,u.jsxs)(x.A,{variant:"h6",sx:{mt:1},children:["\u20b9",null===n||void 0===n?void 0:n.price]})]}),(0,u.jsxs)(t.A,{sx:{display:"flex",alignItems:"center",p:2},children:[(0,u.jsx)(x.A,{children:"Quantity"}),(0,u.jsx)(h.A,{defaultValue:null===n||void 0===n?void 0:n.quantity,sx:{ml:2},onChange:e=>l(n.id,e.target.value),children:[1,2,3,4,5,6,7,8].map((e=>(0,u.jsx)(m.A,{value:e,children:e},e)))})]})]}),(0,u.jsxs)(t.A,{sx:{display:"flex",alignItems:"center",p:2},children:[(0,u.jsxs)(x.A,{variant:"h6",children:["\u20b9",n.price*n.quantity]}),(0,u.jsx)(r.A,{variant:"contained",color:"error",sx:{ml:2},onClick:()=>i(n.id),children:"REMOVE FROM CART"})]})]})},f=()=>{let e=(0,c.Zp)();const n=(0,A.d4)((e=>e.cart.items)),i=(0,A.wA)();console.log(n);const l=e=>{i((0,p.I1)(e))},s=(e,n)=>{i((0,p._V)({_id:e,quantity:n}))},o=n.map((e=>({name:e.Brand+" "+e.Model,color:e.Colour,price:e.Selling_Price,image:e.imgSrc,id:e._id,quantity:e.quantity}))),d=o.reduce(((e,n)=>e+n.price*n.quantity),0),a=d+45;return(0,u.jsxs)(t.A,{sx:{p:3},children:[(0,u.jsx)(x.A,{variant:"h4",gutterBottom:!0,children:"My Cart"}),(0,u.jsxs)(j.Ay,{container:!0,spacing:2,children:[(0,u.jsxs)(j.Ay,{item:!0,xs:12,md:8,children:[o.map(((e,n)=>(0,u.jsx)(y,{item:e,onRemove:l,handleQuantityChange:s},n))),(0,u.jsxs)(x.A,{variant:"h6",children:[n.length," Item(s)"]})]}),(0,u.jsx)(j.Ay,{item:!0,xs:12,md:4,display:0==n.length?"none":"grid",children:(0,u.jsxs)(t.A,{sx:{p:2,border:"1px solid #ddd",borderRadius:1},children:[(0,u.jsx)(x.A,{variant:"h6",gutterBottom:!0,children:"PRICE DETAILS"}),(0,u.jsxs)(t.A,{sx:{display:"flex",justifyContent:"space-between",mb:1},children:[(0,u.jsx)(x.A,{children:"Total MRP"}),(0,u.jsxs)(x.A,{children:["\u20b9",d]})]}),(0,u.jsxs)(t.A,{sx:{display:"flex",justifyContent:"space-between",mb:1},children:[(0,u.jsx)(x.A,{children:"Discount on MRP"}),(0,u.jsxs)(x.A,{children:["\u20b9",0]})]}),(0,u.jsxs)(t.A,{sx:{display:"flex",justifyContent:"space-between",mb:1},children:[(0,u.jsx)(x.A,{children:"Convenience Fee"}),(0,u.jsxs)(x.A,{children:["\u20b9",45]})]}),(0,u.jsxs)(t.A,{sx:{display:"flex",justifyContent:"space-between",mt:2},children:[(0,u.jsx)(x.A,{variant:"h6",children:"Total Amount"}),(0,u.jsxs)(x.A,{variant:"h6",children:["\u20b9",a]})]}),(0,u.jsx)(r.A,{variant:"contained",color:"primary",fullWidth:!0,sx:{mt:2},onClick:()=>e("/checkout"),children:"PLACE ORDER"})]})})]})]})},g=()=>{let e=(0,c.Zp)();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(s.A,{mx:5,children:[(0,u.jsx)(l.A,{}),(0,u.jsx)(t.A,{my:2,children:(0,u.jsx)(r.A,{variant:"contained",sx:{backgroundColor:"#2E0052",color:"#fff",textTransform:"capitalize",borderRadius:"10px",width:"180px",fontStyle:"Roboto"},onClick:()=>e(-1),children:"Back to Products"})})]}),(0,u.jsx)(s.A,{mx:5,display:{xs:"flex",sm:"flex",md:"block",lg:"block"},flexDirection:{xs:"column",sm:"column",md:"row",lg:"row"},children:(0,u.jsx)(f,{})})]})}},5438:(e,n,i)=>{i.d(n,{A:()=>a});i(5043);var l=i(8911),s=i(6446),t=i(4208),r=i(5865),c=i(5445),o=i(3216),d=i(579);const a=()=>{let e=(0,o.zy)();return(0,d.jsx)(l.A,{mt:5,children:(0,d.jsxs)(s.A,{display:"flex",alignItems:"center",flexDirection:"row",gap:"10px",children:[(0,d.jsx)(s.A,{border:2,height:"20px",width:"20px",borderRadius:"50%",padding:"5px",bgcolor:"#fff",borderColor:"purple",display:"flex",justifyContent:"center",alignItems:"center",children:(0,d.jsx)(t.A,{color:"primary",children:(0,d.jsx)(c.A,{})})}),(0,d.jsx)(r.A,{color:"#2E0052",fontWeight:"600",fontSize:"30px",children:"Musicart"}),(0,d.jsxs)(r.A,{ml:"5px",color:"#2E0052",children:["Home / ",e.pathname.split("/")[1]]})]})})}}}]);
//# sourceMappingURL=403.d3dbe5cb.chunk.js.map