import './index.scss'


export default function Rodape(){

    return(


        <footer>

        <img src="./assets/images/footer/footer.svg"/>


        <div id="footer-itens">

          <span id='copyright'>
            © 2024 Sky Blue
          </span>


          <div id='icones'>

            <a href="https://wa.me/5511993296044?text=Olá,%20gostaria%20de%20mais%20informações.">
              <p className='fa-brands fa-whatsapp'></p>
            </a>
            
            <a href="https://www.instagram.com/skyblue.gc/?igsh=MTNyYmJ1ZDgyaDVrZQ%3D%3D">
              <p className='fa-brands fa-instagram'></p>
            </a>
            <a href="https://web.facebook.com/profile.php?id=61568433172407">
              <p className='fa-brands fa-facebook'></p>
            </a>
          </div>

        </div>


    </footer>



    )


}