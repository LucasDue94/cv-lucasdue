import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'periodo',
  standalone: true
})
export class PeriodoPipe implements PipeTransform {
  transform(dataInicio: string, dataFim?: string): string {
    const inicio = new Date(dataInicio);
    const fim = dataFim ? new Date(dataFim) : new Date();

    const options: Intl.DateTimeFormatOptions = {month: 'short', year: 'numeric'};

    const formatarMesAno = (data: Date): string => {
      const mesAno = data.toLocaleDateString('pt-BR', options).replace('.', '');
      return mesAno.charAt(0).toUpperCase() + mesAno.slice(1);
    };

    const inicioStr = formatarMesAno(inicio);
    const fimStr = dataFim ? formatarMesAno(fim) : 'o momento';

    return `${inicioStr} / ${fimStr}`;
  }
}
