describe() — ชื่อ test case 
it() — test step 
expect() — ผลลัพธ์ที่คาดหวัง 
equal() — ผลลัพธ์ที่ควรจะเป็น (สิ่งที่เอามาเปรียบเทียบ)
https://fakestoreapi.com/docs#tag/Products/operation/getProductById ---> fake API เอาไว้เทส
https://www.chaijs.com/api/bdd/ ----> lib ที่ใช้สำหรับทดสอบ api


Variable ใน Cypress

1. Cypress Variable
ต้องการเก็บค่าของ 3
let value = 3
ต้องการหาค่าในการบวกผลลัพ
let result = value + 2
result = 5

ตัวแปรประเภท Synchronized
มี 
let
var
const

Asynchronize
- Closures หรือ functional

ความแตกต่าง
Sync Variable ตัวแปรที่ค่า “คำนวณหรือเปลี่ยนแปลงทันที” ตามลำดับบรรทัด
let value = 1
let result = value +1
value = value +1
console.log(value)

Async Variable ทำงานตามลำดับบรรทัด
let value = 1
let result = value +1
value = value + 1
console.log(value)

Closures Valiable
มันคือตัวแปรรูปแบบหนึ่งใน cypress ที่ใช้ค่อนข้างเยอะใน cypress
Closures วิธีใช้คือ
cy.{commanหรือคำสั่งที่ต้องการ}.then(({command_yield}) => {
    TC หรือ Function ที่เอาไว้ตรวจ expected result
})
Ex.
cy.get('button).then(($button) => {
    ecpected
}).then สามารถทำต่อไปได้เรื่อยๆ



Action Command
สำหรับ api command หลักๆที่เราจะใช้คือ
request
then
should
eq
contains
fixture
get
log




Mocha and Chai
มันคือ libary สำหรับเอาไว้ใช้ทดสอบระบบ

การ test ด้วย cypress เป็น BDD testing
should แล้วตามด้วย expected

peatten
describe('ชื่อ TC', () => {
    it(' Test Step'), () => {
        cy.condition ที่ต้องการทดสอบ ('parameter')
        .then((result ของ condition ที่ต้องเก็บในตัวแปรนี้เผื่อเอาไปใช้ต่อใน Step ถัดไป) => {
            expect(expect ของ TC นั้นๆ)
        })
    }
})


describe() — ชื่อ test case 
it() — test step 



Chai
Assertion
----> การตรวจสอบสิ่งที่เราต้องการตรวจสอบความถูกต้อง
มี keyword ทั้งหมด 13 ตัวคือ ที่ใช้
ok, true, false, null, indefined, NAn, exist, empty, argument, itself, sealed, and finite


Cosmetic
-----> ทำให้อ่านง่ายขึ้น ที่ใช้เยอะคือ พวกนี้ไว้ “เชื่อมประโยค” ให้อ่านลื่น ไม่เปลี่ยนผลการทดสอบ
to, be, been, is,that, which,and,has,have,with,at,of,same,but,and does


Flaffing Properties
-----> คำขยายความเช่น
not,deep,nested,own,ordered,any,and,all


Hook การทำงานที่ก่อนจะเข้า TC

before(() => { 
    
 }) → รัน ครั้งเดียว ก่อน it() ทั้งหมดในบล็อก describe นั้น

beforeEach(() => { 
    
 }) → รัน ทุกครั้ง ก่อน ทุก it() ในบล็อกนั้น

afterEach(() => { 
    
 }) → รัน ทุกครั้ง หลังจบ ทุก it()

after(() => { 
    
 }) → รัน ครั้งเดียว หลังจบ it() ทั้งหมดในบล็อกนั้น




Excluding and Including Test
การเลือก run เฉพาะ TC หรือไม่เลือก run TC ใดๆ

เพิ่มคำสั่งหน้า it เข้าไปเช่น

it.only ---> คือrun แค่เคสนี้เคสเดียว ที่เหลือจะถูกข้ามไป
it.skip ---> ข้าม TC นี้แล้วไป run ที่เหลือ