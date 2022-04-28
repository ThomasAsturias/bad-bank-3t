function Home(){
  return (
    <Card 
      bgcolor="light"
      txtcolor="black"
      header="Welcome to BadBank" 
      title={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
      body={<>
      Select  <a href="#CreateAccount" class="btnDeposit">Create Account to begin</a>.

     
      
      </>}
      
      
    />    
  );  
}