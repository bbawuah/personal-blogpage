---
title: 'Sprint 2'
section: development
assignment: sprint-two
date: '2021-10-30'
type: 'project'
---

<h2>Development</h2>

<p>This sprint I have not done any development for our group project. But I have been experimenting with writing some shaders to get familiar</p>

<p>Because the WebGL engine in the browser accepts shaders written in GLSL, I started of with writing shaders in GLSL rather than HLSL the shader language used in Unity</p>

<h3>GLSL and HLSL</h3>

I did some research on the differences on shaders and this is what I found:

in HLSL, attributes are arguments in the shader functions, in GLSL, they're keywords denoted by attribute and varying.

in GLSL output variables are denoted with a gl\_ prefix, in HLSL they're explicitly denoted with a out keyword. (GLSL has the out keyword as well, and allows for custom output variable names. Eventually, you must hit a main() function though.)

The main functions in HLSL could be named anything you want, whereas in GLSL, it must be main().

Shaders are basically a set of instructions. The instructions are executed all at once for every single pixel on the screen/environment.

source: <a href="https://codepen.io/alaingalvan/post/glsl-vs-hlsl">glsl-vs-hlsl</a>

<h3>What are shaders?</H3>

A shader consist of a vertex shader and a fragment shader. A vertex shader determines the position of every pixel on the scree/ environment and the fragment shader determines the color.

Attribute are read-only variables containing data shared from WebGL/OpenGL environment to the vertex shader.

Uniform variables are basically read-only data shared from WebGL/OpenGL environment to a vertex or fragment shader.

Varying variables contain data shared from a vertex shader to a fragment shader.

This is an example of a shader that I wrote.

The only thing this shader is doing is basically setting the position for every pixel in 3D space and passing the uv and time to the fragment shader.

```glsl
attribute vec2 uv;
attribute vec3 position;
attribute vec3 normal;
uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;

uniform float u_time;

varying vec2 vUv;
varying float vTime;

void main() {
  float time = u_time * 0.125;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);

  vUv = uv;
  vTime = time;
}

```

In the fragment shader, I am using the varying variables to repeat the texture in a specific shape for a specific time.

```glsl
precision mediump float;
uniform sampler2D u_texture;

varying vec2 vUv;
varying float vTime;

void main() {
  vec2 uv = vUv * vec2(1.0, -1.0);

  vec2 repeat = vec2(3.,3.);

  float strength = distance(vec2(vUv.y, (vUv.x - 0.3) * 1.0 + 0.5), vec2(0.5));

  vec2 newUv = fract(uv * vec2(strength) * repeat + sin(vec2(0.0, vTime * 1.25)));

  vec3 texture = texture2D(u_texture, newUv).rgb;

	gl_FragColor = vec4(texture, 1.0);
}
```

This shader is used in my <a target="_blank" href="https://www.thenext.gallery/">Personal project</a> where I use shaders to create Kinetic typography on the walls in 3D and VR.

<h3>Conclusion</h3>
<p>I already had some experience with writing shaders, but going playing around with new patterns and shapes definetely helped me to get inspired on what is possible with shaders.</p>
