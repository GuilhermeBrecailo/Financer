<template>
    <v-container class="grid">
        <v-card  class="card"> 
            <div class="title">
                <p>Login</p>
                <button>Registre-se</button>
            </div>
            <div>
                <v-text-field  label="login"/>
                <v-text-field  label="Senha"/>
            </div>
            <div class="buttons">
                <button>Esqueceu sua senha?</button>
                <button>Entrar</button>
            </div>
        </v-card>
    </v-container>
</template>


<style scoped>
.title{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.title p{
    font-size: 24px;
}
.grid{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: green;
}
.card{
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
    padding: 20px;
}
.buttons{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
