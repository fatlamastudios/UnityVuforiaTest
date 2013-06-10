using UnityEngine;
using System.Collections;

public class SceneController : MonoBehaviour {
	
	public PlayHardwareMovieClassPro[] movieClass;
	
	public string[] movieName;
	public float[] seekTime;
	
	// Use this for initialization
	void Start () {
		for(int i=0 ; i < movieClass.Length;i++) {
			StartCoroutine(RunTest(i,movieName[i],seekTime[i]));
		}
	}
	
	void Print(string str)
	{
		print(str);
		guiText.text=str;
	}
	
	IEnumerator RunTest(int index, string movie, float seek) {	
		yield return new WaitForSeconds(13.0F*index);
		// stream if the right class..... as PlayMovieAt is not supported in streaming movies (yet).
		if(typeof(PlayStreamingMovie) == movieClass[index].GetType()) {
			movieClass[index].PlayMovie(movie);
		} else {
			movieClass[index].PlayMovieAt(movie,seek);
		}
    }
	
	// Update is called once per frame
	void Update () {
	}
}
