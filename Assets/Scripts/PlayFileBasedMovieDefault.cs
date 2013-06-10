using UnityEngine;
using System.Collections;

// See base class for pause/resume etc....
public class PlayFileBasedMovieDefault : PlayHardwareMovieClassPro {
	
	// Use this for initialization
	protected override void Awake () {
		base.Awake();
	}

	protected override void Start ()
	{
		base.Start();
	}
	
	public override void FinishedMovie(string str)
	{
		OpenGLMovieRewindIndex(movieIndex);
	}
	
	public override void PlayMovie (string movie)
	{
		base.PlayMovie(movie);
	}
	
	public override void ReadyMovie (string str)
	{
		base.ReadyMovie(str);
		playMovie = true;
	}
}
