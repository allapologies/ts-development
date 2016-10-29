import { isInArray } from '../tasks/isInArray'

describe('Project', ()=> {
    it('should start without errors', ()=> {
        expect(true).toBeTruthy()
    })

    it('should start without errors', ()=> {
        expect(isInArray([1,2], 1)).toBeTruthy()
    })
})
