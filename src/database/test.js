const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {

   //inserir dados na tabela
    await saveOrphanage(db, {
            lat: "-27.2152821",
            lng: "-49.6592667",
            name: "Lar dos meninos",
            about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
            whatsapp: "(11)998724374",
            images: [
                "https://images.unsplash.com/photo-1567701562484-deab2750d1e8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
                
                "https://images.unsplash.com/photo-1592840331052-16e15c2c6f95?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
            ].toString(), 
            instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
            opening_hours: "Horário de visitas Das 18h até 8h",
            open_on_weekends: "0"
        
        }) 

    // consultar a tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // Consultar somente um orfanato pelo id 
  
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    console.log(orphanage)

    // deletar dado da tabela

    console.log(await db.run('DELETE FROM orphanages WHERE id ="3"'))
})