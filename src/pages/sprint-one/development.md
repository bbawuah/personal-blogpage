---
title: 'Sprint 1'
section: development
assignment: sprint-one
date: '2021-09-17'
type: 'project'
---

<h2>XR Development</h2>

For XR Development we had to create some mechanics for our prototype. I worked on creating some movement in the object that the user needs to follow in the concentration environment.

![Unity](../../utils/assets/concentration-test.png)

I wrote a small script that moves the focus the object into a few patterns.

First, I declared two properties, the amplitude and the frequency of the object. This way, I could play around with the range and the speed of the focus object in the Unity scene. I also declared a start position for the focus object.
If the player was too far away from the focus object. We did not want the user to be able to look at the object. So I created a maximumDistance property and a maximumDistanceSquared property.

```csharp
public float amplitude;
public float frequency;

//If player is further than this distance, lookAtScore should return -1
public float maximumDistance = 20;
private float maximumDistanceSquared;

Vector3 startPosition;

private float x;
private float y;
private float z;
```

In the on start method I assign the transform.position to the startPosition propery I declared earlier.

```csharp
 void Start()
    {
        startPosition = this.transform.position;

        maximumDistanceSquared = maximumDistance * maximumDistance;
    }
```

Then in the update method, I call a function called handlePattern that handles the different patterns the object follows.
The getLookAtScore method returns a normalized float number that tells us how close the user looks at the object. 0 means far away and 1 means that the user is looking exactly at the object.
I added some slack to this number to make it easier to look at the object.

```csharp
 this.HandlePattern();
float score = this.getLookAtScore();
if (score > 0.95f)
{
    renderer.material.color = Color.green;
}
else
{
    renderer.material.color = Color.red;
}

totalScore += score;
frameCount++;

this.transform.position = new Vector3(x + startPosition.x, y + startPosition.y, z);
```

The getLookatScore functions looks like this:

```csharp
    float getLookAtScore()
    {
        Vector3 playerToObject = this.transform.position - playerTransform.position;

        if(maximumDistance!=0 && playerToObject.sqrMagnitude > maximumDistanceSquared)
            return -1;

        playerToObject.Normalize();
        Vector3 lookDirection = playerTransform.forward;

        return Vector3.Dot(playerToObject, lookDirection);
    }
```

These are all the patterns that the focus object follows.

```csharp
 void ReversedLinearPattern()
    {
        x = Mathf.Sin(Time.timeSinceLevelLoad * frequency) * amplitude;
        y = Mathf.Sin(5.0f * Time.time);
        z = transform.position.z;
    }

    void LinearPattern()
    {
        x = Mathf.Sin(5.0f * Time.time);
        y = Mathf.Sin(Time.timeSinceLevelLoad * frequency) * amplitude;
    }

    void CirclePattern()
    {
        x = Mathf.Sin(Time.timeSinceLevelLoad * frequency) * amplitude;
        y = Mathf.Cos(Time.timeSinceLevelLoad * frequency) * amplitude;
    }

    void KnotPattern()
    {
        x = Mathf.Sin(Time.timeSinceLevelLoad * frequency) * amplitude;
        y = Mathf.Cos(Time.timeSinceLevelLoad * frequency) * Mathf.Sin(Time.timeSinceLevelLoad * frequency) * amplitude;
    }

    void ReveredKnotPattern()
    {
        x = Mathf.Cos(Time.timeSinceLevelLoad * frequency) * Mathf.Sin(Time.timeSinceLevelLoad * frequency) * amplitude;
        y = Mathf.Sin(Time.timeSinceLevelLoad * frequency) * amplitude;
    }

    void HandlePattern()
    {

        if (Time.timeSinceLevelLoad < 10.0)
            this.ReversedLinearPattern();

        if (Time.timeSinceLevelLoad > 10.0 && Time.timeSinceLevelLoad < 30.0)
            this.LinearPattern();

        if (Time.timeSinceLevelLoad > 30.0 && Time.timeSinceLevelLoad < 40.0)
            this.CirclePattern();

        if (Time.timeSinceLevelLoad > 40.0 && Time.timeSinceLevelLoad < 50.0)
            this.KnotPattern();

        if (Time.timeSinceLevelLoad > 50.0)
            this.ReveredKnotPattern();
    }

    // For testing without VR
    private void OnMouseEnter()
    {
        renderer.material.color = Color.green;
    }

    private void OnMouseExit()
    {
        renderer.material.color = Color.red;
    }
```
