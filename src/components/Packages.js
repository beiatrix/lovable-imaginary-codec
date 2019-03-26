import React from 'react'
import {PackageItem} from './PackageItem'
import '../styles/Packages.css'

const data = [
  {
    i: "fa fa-compass fa-4x",
    title: "Guided Trips",
    desc: "Looking for the complete experience? Take a tour with one of our experts. They'll show you secrets that you're likely to miss otherwise."
  },
  {
    i: "fa fa-camera-retro fa-4x",
    title: "Photo Trips",
    desc: "Want to experience nature's beauty without all of that annoying exercise? Take a photo tour on one of our mountain buses.",
  },
  {
    i: "fa fa-bicycle fa-4x",
    title: "Biking Trips",
    desc: "If bicycles are more your speed, consider taking a tour through one of our mountain bike paths. We'll provide the bikes, and lunch too!",
  },
  {
    i: "fa fa-flag-checkered fa-4x",
    title: "Racing Trips",
    desc: "Got a competitive spirit? Sign up for one of our mountain marathons! Try to reach the summit before anyone else.",
  },
]

export const Packages = props => {
  return (
    <section className="packages">
      <h3 className="title">Tour Packages</h3>
      <p>We offer a variety of mountaineering packages. Whether you've climbed Everest or don't even know what a mountain is, we've got the perfect vacation for you.</p>
      <hr />
      <ul className="grid">
        {
          data.map((item, idx) => {
            return <PackageItem key={`PackageItem-${idx}`} item={item} />
          })
        }
      </ul>
    </section>
  )
}