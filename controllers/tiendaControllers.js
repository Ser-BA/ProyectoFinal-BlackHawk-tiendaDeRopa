const renderPrincipal =(req, res)=>{

           
         res.render('pages/Principal.ejs');
            
  
};

const renderRemeras =(req, res)=>{

   
         res.render('pages/Remeras.ejs');
    

};

const renderPantalones =(req, res)=>{

    
         res.render('pages/Pantalones.ejs');
    

};

module.exports = {
    renderPrincipal,
    renderRemeras,
    renderPantalones
};