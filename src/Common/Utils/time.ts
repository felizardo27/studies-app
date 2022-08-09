export function tempoParaSegundos(tempo: string){
    const [hora, minuto, segundo] = tempo.split(':');
    const horaSegundo = Number(hora) * 3600;
    const minutoSegundo = Number(minuto) * 60;
    return horaSegundo + minutoSegundo + Number(segundo);
}