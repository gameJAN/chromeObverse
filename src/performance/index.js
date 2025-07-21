import fetch from './fetch'
import observerEntries from './observerEntries'
import observerFCP from './observerFCP'
import observerLCP from './observerLCP'
import observerLoad from './observerLoad'
import observerPaint from './observerPaint'
import xhr from './xhr'

export default function performance(){
    fetch()
    observerEntries()
    observerFCP()
    observerLCP()
    observerLoad()
    observerPaint()
    xhr()
}