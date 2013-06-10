Video Texture Pro 2.0.0
Copyright 2011-2013 Brian Chasalow & Anton Marini
AVFoundation-based video player for OSX and iOS for fast video texture playback in Unity.

Questions/Bugs/dollars? brian@chasalow.com

Usage: Put the VideoTexture script on a GameObject. select a video path for an individual movie, or load an entire movie folder.
Note: If you want to embed a movie inside your app for deployment, create a StreamingAssets folder, rename your movies to the .m4v extension, and put them in that folder. They should automatically get copied into your Xcode project and 'just work.' On iOS, you will also need to add libc++.dylib to your Xcode build phases linker step.

VideoTexture instance accessors you may access:

bool IsVideoLoaded 
get: if(myVideoTexture.IsVideoLoaded)
set: read-only.

VideoLoopType LoopType
// VideoLoopType enum types available:
//VideoLoopType.LOOP_QUEUE, VideoLoopType.PLAY_QUEUE_AND_STOP, VideoLoopType.LOOP_VIDEO, VideoLoopType.PLAY_VIDEO_AND_STOP
get: if(myVideoTexture.LoopType == VideoLoopType.LOOP_QUEUE)
set: myVideoTexture.LoopType = VideoLoopType.LOOP_QUEUE;

bool ErrorVideoLoading
//TODO: better error handling - this method reserved for future implementation.

float VideoSpeed
get: if(myVideoTexture.VideoSpeed == 1.0f)
set: myVideoTexture.VideoSpeed = 2.0f;

bool IsPaused
get: return myVideoTexture.IsPaused;
set: myVideoTexture.IsPaused = true;

float VideoTime
//returns and can set video time in seconds.
get: if(myVideoTexture.VideoTime > 10.0f)
set: myVideoTexture.VideoTime = 0.0f;

float VideoVolume
//unavailable on iOS (uses system volume settings on iOS)
get: if(myVideoTexture.VideoVolume == 1.0f)
set: myVideoTexture.VideoVolume = 0.0f;

string[] videoPaths
//array of strings representing the videos you would like to load.
get: return videoPaths[CurrentlyPlayingIndex];
set: myVideoTexture.videoPaths[0] = "/Users/myComputer/myMovie.mov";

int CurrentlyPlayingIndex
//the index into the videoPaths array of the currently playing movie
get: return myVideoTexture.CurrentlyPlayingIndex;
set: read-only.

RenderTexture RenderTex
//the video texture
get: return myVideoTexture.RenderTex;
set: read-only. 

float VideoDuration
//the length of the movie, in seconds
get: return myVideoTexture.VideoDuration;
set: read-only

int VideoTextureWidth
//width of the encoded texture size
get: return myVideoTexture.VideoTextureWidth;
set: read-only

int VideoTextureHeight
//height of the encoded texture size
get: return myVideoTexture.VideoTextureHeight;
set: read-only

PLEASE NOTE: videos can have a different internal texture size than their aspect ratio size.
if calculating aspect ratio for display purposes,
use VideoAspectWidth and VideoAspectHeight instead of VideoTextureWidth and VideoTextureHeight.

int VideoAspectWidth
//w of the 'natural' size of the movie, for display
get: return myVideoTexture.VideoAspectWidth;
set: read-only

int VideoAspectHeight
//h of the 'natural' size of the movie, for display
get: return myVideoTexture.VideoAspectHeight;
set: read-only


convenience methods:
public void load();
if you rearrange movies in the videoPaths array, you will have to call myVideoTexture.load() again.
//TODO: make it so that queuelist modification/reordering can happen on the fly without needing to call this method

public void jumpToVideo(int i);
this lets you jump to a particular movie index in the videoPaths array.


public int setVideoPathsToDir(string myDirectory);
this will set the videoPaths to a particular directory on disk. takes a string in the form: "/Users/bob/Desktop/movies/"
you may choose to read from an xml file and set the video paths on Awake(), using this method.

important callbacks: 
see PlaneScaler.cs for a simple example of how to use these.

public void UpdateAspectRatio(Vector2 texWidthHeight);
If your video texture resizes, any script on the same object as your VideoTexture script gets the notification
that the video has been resized, and provides the new VideoAspectWidth and VideoAspectHeight so that you may handle adjusting aspect ratio.

void VideoTextureLoaded();
When a video successfully loads or the next movie in a queue starts, this callback is triggered on any script on the same gameObject as your VideoTexture.

void VideoPlaybackEnded();
If a video has the loopType VideoLoopType.PLAY_QUEUE_AND_STOP, PLAY_VIDEO_AND_STOP, or LOOP_VIDEO, and the video stops, this callback gets triggered.
if the loopType is PLAY_QUEUE_AND_STOP or PLAY_VIDEO_AND_STOP, to continue, you are then required to do one of the following:
myVideoTexture.IsPaused = false;  //continues to the next movie in the queue
myVideoTexture.jumpToVideo(int i); //jumps to another movie in the queue


Versions: 
2.0.1 : Plays nicely with Syphon plugin.
2.0.0 : First release of AVFoundation based player.


