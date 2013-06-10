using UnityEngine;
using System.Collections;
using System;
using System.Text;
using System.Net;
using System.Net.Sockets;
using System.IO;
using System.Runtime.InteropServices;
using System.Collections.Generic;
// This class manages the video players for all objects in a scene.
// This script goes on your main camera.
// Copyright 2011-2013 Brian Chasalow & Anton Marini - brian@chasalow.com - All Rights Reserved.
public class VTP  {


	//SETUP CALLBACKS FROM PLUGIN
#if UNITY_EDITOR
	[DllImport ("VTPAVF")]
		private static extern void initCallbacks();		
#elif UNITY_IPHONE
	[DllImport ("__Internal")]
		private static extern void initCallbacksIOS();
#else
	[DllImport ("VTPAVF")]
		private static extern void initCallbacks();		
#endif

	static public bool initialized = false;
	static public Texture2D nullTexture;
	static public List<VideoTexture> videoTextures = new List<VideoTexture>();
	static public string[] validFileTypes = new string[] { "*.avi", "*.mov", "*.m4v", "*.mp4" };
		
	static public void init(){
		if(!VTP.initialized){
			Debug.Log ("initializing Video Texture Pro 2.0.");
			VTP.initialized = true;
			Application.runInBackground = true;
			#if UNITY_EDITOR
			VTP.initCallbacks();
			#elif UNITY_IPHONE
			VTP.initCallbacksIOS();
			#else
			VTP.initCallbacks();		
			#endif
			VTP.createNullTexture();
		}
//		else
//			Debug.Log ("not initializing! already init'd");
	}
	
	//a black texture is used to make sure you're not rendering garbage to textures. you only ever need one, so create it here.
	static public void createNullTexture(){
		VTP.nullTexture = new Texture2D(64, 64, TextureFormat.ARGB32, false);
		Color[] pixels = new Color[VTP.nullTexture.width*VTP.nullTexture.height];
		for(int i = 0; i < pixels.Length; i++){
			pixels[i] = new Color(0, 0, 0, 1);
		}
		VTP.nullTexture.SetPixels(pixels);
		VTP.nullTexture.Apply();
	}
	
	static public void addInstance(VideoTexture addMe){
		if(!VTP.videoTextures.Contains(addMe)){
			VTP.videoTextures.Add(addMe);
		}
	}
	
	static public void removeInstance(VideoTexture removeMe){
		if(VTP.videoTextures.Contains(removeMe)){
			VTP.videoTextures.Remove(removeMe);
		}
	}
	
	
	public static void videoLoaded(IntPtr myptr, bool loadSuccess, int idx){
		foreach(VideoTexture myTexture in videoTextures){
			if(myptr == myTexture.VideoInstance)
			{
				myTexture.videoLoaded(loadSuccess, idx);
			}
		}
	}
	
	
	public static void videoEnded(IntPtr myptr){	
		foreach(VideoTexture myTexture in videoTextures){
		if(myptr == myTexture.VideoInstance){
				myTexture.videoEnded();
			}
		}
	}



 }
