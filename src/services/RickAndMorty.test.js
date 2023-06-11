import { RickAndMortyService } from './RickAndMorty.Service';
import characters from '../data/data.json'
import axios from "axios";

jest.mock('axios');
describe('RickAndMortyService Service', () => {
    beforeEach(()=>
        axios.get.mockResolvedValueOnce({
        characters
    }))

  it('should return the list', async () => {
    jest.spyOn(RickAndMortyService, 'getAll').mockResolvedValue([characters.results[0]]);
    const response = await RickAndMortyService.getAll(1);
    expect(response).toEqual([characters.results[0]]);
  });
});
