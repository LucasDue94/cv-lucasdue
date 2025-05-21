import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duracao',
  standalone: true
})
export class DuracaoPipe implements PipeTransform {
  transform(dataInicio: string, dataFim?: string): string {
    const inicio = new Date(dataInicio);
    const fim = dataFim ? new Date(dataFim) : new Date();

    let anos = fim.getFullYear() - inicio.getFullYear();
    let meses = fim.getMonth() - inicio.getMonth();

    if (meses < 0) {
      anos--;
      meses += 12;
    }

    const partes = [];
    if (anos > 0) partes.push(`${anos} ${anos === 1 ? 'ano' : 'anos'}`);
    if (meses > 0) partes.push(`${meses} ${meses === 1 ? 'mês' : 'meses'}`);

    return `(${partes.length ? partes.join(' e ') : 'menos de 1 mês'})`;
  }
}
