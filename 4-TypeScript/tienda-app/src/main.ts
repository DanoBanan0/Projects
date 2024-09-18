import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
      <h1>Holis desde MainTS</h1>

      <form id="login-Form">
        <section>
          <label>Nombre de usuraio</label>
          <input type="text" id="username" name="name" placeholder="Ingresa Nombre de Ususario">
        </section>

        <section>
          <label>Password</label>
          <input type="password" id="password" name="password" placeholder="Ingresa Tu Password">
        </section>

        <button type="submit">Iniciar Sesion</button>
      </form>

  </div>
`

//document.querySelector<HTMLElement>('#parrafo')!.innerText = "Esto es texto desde el p";
const form = document.getElementById("login-Form") as HTMLFormElement;

form.addEventListener('submit', (e:SubmitEvent) => {
  e.preventDefault();
  console.log("Holiwis");
})