import React from 'react'

function Home(){
  return <div>
    
      <img class="d-block w-100" src="https://images.unsplash.com/photo-1661956601349-f61c959a8fd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="First slide" style={{height:"500px"}}/>
<br></br>
<br></br>
      <div class="container">
  <div class="row">
    <div class="col">
    <div class="card-body"style={{border:"0.25px solid grey"}}>
    <h5 class="card-title">What is blog writing?</h5>
    <p class="card-text">Blogging refers to writing, photography, and other media that's self-published online. Blogging started as an opportunity for individuals to write diary-style entries, but it has since been incorporated into websites for many businesses.</p>
  </div>
    </div>
    <div class="col">
    <div class="card-body"style={{border:"0.25px solid grey"}}>
    <h5 class="card-title">Top Blog Writers</h5>
    <p class="card-text">Here are the top writing blogs that every writer should follow:</p>
    
    <a href="https://www.writersrepublic.com/blog/top-writing-blogs" alt="main" class="btn btn-info">Top 7 blog Writers</a>
  </div>
    </div>
  </div>
</div>
<br></br>
<br></br>
<br></br>
<br></br>
<div className='container'>
  <h4 style={{textAlign:"center"}}>FAQ's</h4>
  <br></br>
<div class="accordion" id="accordionExample">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h2 class="mb-0">
        <button class="btn btn btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"
        >How many posts can I create
        </button>
      </h2>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body">
      There is no such limit kept so far, however we are working on free model of DB services so we might take necessary steps on increase of usage in future.<code></code> 
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo">
      <h2 class="mb-0">
        <button class="btn btn btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
         Will other users be able to edit or delete my content?
        </button>
      </h2>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div class="card-body">
        No, any other user than you are not allowed or given access to delete data.
      </div>
    </div>
  </div >
  <div class="card">
    <div class="card-header" id="headingThree">
      <h2 class="mb-0">
        <button class="btn btn btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          What actions are taken on posting irrelevant stuff?
        </button>
      </h2>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div class="card-body">
        Content is under continuos monitoring, on finding any irrelevant stuff ADMIN will be removing the particular post, and the author of the post will be informed the same via Email.
        <div>
          Users can also report such activities from report page.
          </div> 
      </div>
    </div>
  </div>
</div>
</div>
<br></br>
<br></br>
<br></br>
<br></br>
<div>
 
<footer class="page-footer font-small special-color-dark pt-4" style={{backgroundColor:"#2a2828",color:"#d0c2c2"}} >
  <div class="container-fluid text-center text-md-left">
    
    <div class="row">

     
      <div class="col-md-6 mt-md-0 mt-3">
     
        <h5 class="text-uppercase">About the Developer</h5>
        <p>Undergraduate student currently pursuing his B.Tech and a highly ambitious and determined person who can go well with people.</p>

      </div>
      <hr class="clearfix w-100 d-md-none pb-3"/>

      <div class="col-md-3 mb-md-0 mb-3">

        <h5 class="text-uppercase">Links</h5>

        <ul class="list-unstyled">
          <li>
            <p>GitHub: <a href="https://github.com/VIJAYRUR"><i>link</i></a></p>
          </li>
          <li>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/sai-vijay-nagarur-a755a2231/"><i>link</i></a></p>
          </li>
          <li>
            <p>Email: <a href="n.vijay722@gmail.com"><i>n.vijay711@gmail.com</i></a></p>
          </li>
        </ul>

      </div>
    
    </div>
   
  </div>
 
  <div class="footer-copyright text-center py-3">© 2023 Copyright:
    <i> Nagarur Sai vijay</i>
  </div>
 
</footer>
</div>
    </div>
 
  
}
export default Home;
