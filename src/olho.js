
    const passwordInput = document.getElementById('password')
    const confirmPasswordInput = document.getElementById('confirmPassword')
    const botaoOlho = document.getElementById('botaoOlho')
    const confirmBotaoOlho = document.getElementById('confirmBotaoOlho')


    // Quando clicar no icone do olho aparece a senha.

    botaoOlho.addEventListener('click', () => {
        const type = passwordInput.type === 'password' ? 'text' : 'password';
        passwordInput.type = type

    botaoOlho.innerHTML = type === 'password'
      ? `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 1 016 0z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
`
      : `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3l18 18M10.94 10.94a3.5 3.5 0 014.12 4.12M9.88 9.88a3.5 3.5 0 014.24 4.24M12 5c4.477 0 8.268 2.943 9.542 7-.263.84-.63 1.64-1.08 2.38M4.458 7.62a9.97 9.97 0 00-1.08 2.38C3.732 7.943 7.523 5 12 5z" />
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.343 9.343l5.314 5.314" />
</svg>
`;
 } )

confirmBotaoOlho.addEventListener('click', () => {
  const type = confirmPasswordInput.type === 'password' ? 'text' : 'password';
  confirmPasswordInput.type = type

  confirmBotaoOlho.innerHTML = type === 'password'
  ? `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 1 016 0z" />
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
`
  : `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3l18 18M10.94 10.94a3.5 3.5 0 014.12 4.12M9.88 9.88a3.5 3.5 0 014.24 4.24M12 5c4.477 0 8.268 2.943 9.542 7-.263.84-.63 1.64-1.08 2.38M4.458 7.62a9.97 9.97 0 00-1.08 2.38C3.732 7.943 7.523 5 12 5z" />
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.343 9.343l5.314 5.314" />
</svg>
`; 
  
})


