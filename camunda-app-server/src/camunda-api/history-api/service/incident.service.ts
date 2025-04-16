import { Injectable } from '@nestjs/common';
import { HistoricIncidentFilterCount } from '../model/HistoricIncidentFilter';
import { filterToQueryParams } from '@/share/lib';

@Injectable()
export class IncidentService {
  private readonly url = `${process.env.CAMUNDA_API_URL}/history/incident`;

  public getHistoricIncidentsCount(
    filter: HistoricIncidentFilterCount = {},
  ): Promise<number> {
    const params = filterToQueryParams(filter);
    return fetch(`${this.url}/count?${params}`)
      .then((res) => res.json())
      .then(({ count }) => count);
  }
}
