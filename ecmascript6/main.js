class Matematica {
    // Static não tem conhecimento do restante da classe.
    // Somente do seu escopo.
    static soma(a,b) {
        return a + b;
    }
}

console.log(Matematica.soma(1,2));