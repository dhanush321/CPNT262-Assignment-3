const sectbutton = document.querySelector('#sector')
const catbutton = document.querySelector('#category')
const butn1 = document.querySelector('#dropdownsec')
const butn2 = document.querySelector('#dropdowncat')
const butn3 = document.querySelector('#dropdowncrime')
const butn4 = document.querySelector('#dropdowndisorder')

function crime(data) {

    
    const card = document.createElement("div")
    card.className = "card"

    const sector = document.createElement("p")
    sector.className = "Sector"
    sector.textContent = "1. Sector: " + data.sector

    const community = document.createElement("p")
    community.className = "Community Name"
    community.textContent = "2. Community: " + data.community_name

    const groupcat = document.createElement("p")
    groupcat.className = "Group Category"
    groupcat.textContent = "3. Type: " + data.group_category

    const category = document.createElement("p")
    category.className = "Category"
    category.textContent = "4. Category: " + data.category

    const count = document.createElement("p")
    count.className = "Count"
    count.textContent = "5. Count: " +data.count

    const month = document.createElement("p")
    month.className = "Month"
    month.textContent = "6. Month: " +data.month
    
    card.appendChild(sector)
    card.appendChild(community)
    card.appendChild(groupcat)
    card.appendChild(category)
    card.appendChild(count)
    card.appendChild(month)
    document.querySelector('section').appendChild(card)
  
}

const url = "https://data.calgary.ca/resource/848s-4m4z.json"

fetch(url)
    .then(x => x.json())
    .then(data => {
        function clear(){
            document.querySelector('section').innerHTML=''
        }
        sectbutton.addEventListener('click', function() {
 
            butn1.className = "sectshow"
            butn2.className = "dds"
            butn3.className = 'dds'
            butn4.className = 'dds'
          const ne = document.querySelector('#northeast')
          ne.addEventListener('click', function() {
            clear()
            data.filter(item => item.sector === "NORTHEAST")
           .forEach(crime)
        
        })
        const nw = document.querySelector('#northwest')
        nw.addEventListener('click', function() {
            clear()
            data.filter(item => item.sector === "NORTHWEST")
            .forEach(crime)
          
        })
        const se = document.querySelector('#southeast')
        se.addEventListener('click', function() {
            clear()
            data.filter(item => item.sector === "SOUTHEAST")
            .forEach(crime)
          
        })
        const s = document.querySelector('#south')
        s.addEventListener('click', function() {
            clear()
            data.filter(item => item.sector === "SOUTH")
            .forEach(crime)
          
        })
        const e = document.querySelector('#east')
        e.addEventListener('click', function() {
            clear()
            data.filter(item => item.sector === "EAST")
            .forEach(crime)
          
        })
        const n = document.querySelector('#north')
        n.addEventListener('click', function() {
            clear()
            data.filter(item => item.sector === "NORTH")
            .forEach(crime)
          
        })
        const w = document.querySelector('#west')
        w.addEventListener('click', function() {
            clear()
            data.filter(item => item.sector === "WEST")
            .forEach(crime)
          
        })
        const c = document.querySelector('#centre')
        c.addEventListener('click', function() {
            clear()
            data.filter(item => item.sector === "CENTRE")
            .forEach(crime)
          
        })
        })
        catbutton.addEventListener('click', function() {
            
            butn1.className='dds'
            butn2.className = "sectshow"
            butn3.className='dds'
            butn4.className = 'dds'
          const cr = document.querySelector('#crime')
          cr.addEventListener('click', function() {
              butn3.className="sectshow"
              butn4.className = 'dds'
            clear()
                const asa = document.querySelector('#assault')
                asa.addEventListener('click', function () {
                clear()
                data.filter(item => item.category === "Assault (Non-domestic)")
                .forEach(crime)
                })
                const cb = document.querySelector('#combreak')
                cb.addEventListener('click', function () {
                clear()
                data.filter(item => item.category === "Commercial Break & Enter")
                .forEach(crime)
                })
                const crob = document.querySelector('#comrobbery')
                crob.addEventListener('click', function () {
                clear()
                data.filter(item => item.category === "Commercial Robbery")
                .forEach(crime)
                })
                const rb = document.querySelector('#resbreak')
                rb.addEventListener('click', function () {
                clear()
                data.filter(item => item.category === "Residential Break & Enter")
                .forEach(crime)
                })
                const srob = document.querySelector('#streetrobbery')
                srob.addEventListener('click', function () {
                clear()
                data.filter(item => item.category === "Street Robbery")
                .forEach(crime)
                })
                const tfv = document.querySelector('#theffromveh')
                tfv.addEventListener('click', function () {
                clear()
                data.filter(item => item.category === "Theft FROM Vehicle")
                .forEach(crime)
                })
                const tov = document.querySelector('#theftofveh')
                tov.addEventListener('click', function () {
                clear()
                data.filter(item => item.category === "Theft OF Vehicle")
                .forEach(crime)
                })
                const vio = document.querySelector('#violence')
                vio.addEventListener('click', function () {
                clear()
                data.filter(item => item.category === "Violence Other (Non-domestic)")
                .forEach(crime)
                })
        })
        const dor = document.querySelector('#disorder')
        dor.addEventListener('click', function() {
            butn3.className='dds'
            butn4.className = 'sectshow'
            clear()
                const sodo = document.querySelector('#socialdo')
                sodo.addEventListener('click', function () {
                clear()
                data.filter(item => item.category === "Social Disorder")
                .forEach(crime)
                })
                const phydo = document.querySelector('#physicaldo')
                phydo.addEventListener('click', function () {
                clear()
                data.filter(item => item.category === "Physical Disorder")
                .forEach(crime)
                })
        })
        })
    })