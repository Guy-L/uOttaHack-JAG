Welcome! It's time to get JAGT!
["Get the app!"](/Guy-L/uOttaHack-JAG/raw/master/release/JAGT%20Move.apk)

## Inspiration
JAGT Move originally came forth as an idea after one of our members injured himself trying to perform a basic exercise move he wasn't used to. The project has pivoted around over time, but the idea of applying new technologies to help people perform poses has remained. 

## What it does
The project compares positional information between the user and their reference exercise footage using pose recognition (ML) in order to give them metrics and advice which will help them perform better (either as a clinical tool, or for everyday use).

## How we built it
- Android frontend based of TensorFlow Lite Posenet application
- NodeJS backend to retrieve the metrics, process it and provide the error of each body part to the website for visual presentation.
- A React website showing the live analysis with details to which parts of your body were out of sync.

## Challenges we ran into
- Only starting model available for Android project used Kotlin, which our mobile dev. had to learn on the fly
- Server errors like "post method too voluminous", and a bunch of other we had to work around
- Tons of difficult back-end calculations
- Work with more complex sets of data (human shapes) in an ML context


## What's next for JAGT Move 
Expand the service, specialize the application for medical use further, expand on the convenience of use of the app for the general public, and much more! It's time to get JAGT!
