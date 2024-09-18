import { expect, test } from 'vitest'
// noteUtils.test.js
import getNoteFromKey from './noteUtils';


test('si le paso la letra a devolverá C4', ()=> {
    let note = getNoteFromKey('a')
    expect(note).toBe('C4')
})

test('si no le paso una letra devolverá undefined', ()=> {
    let note = getNoteFromKey(null)
    expect(note).toBeUndefined()
})