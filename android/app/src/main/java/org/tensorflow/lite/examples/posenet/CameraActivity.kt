/*
 * Copyright 2019 The TensorFlow Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.tensorflow.lite.examples.posenet

import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.widget.VideoView
import androidx.appcompat.app.AppCompatActivity
import org.json.JSONObject
import java.util.*

class CameraActivity : AppCompatActivity() {
  private lateinit var poseNet: PosenetActivity

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    setContentView(R.layout.activity_camera)

    var videoView = findViewById(R.id.video) as VideoView
    videoView.setVideoURI(Uri.parse("android.resource://" + packageName +"/"+R.raw.jellyfish))
    videoView.requestFocus()
    videoView.start()

    videoView.setOnPreparedListener {
        Timer().schedule(object : TimerTask() {
            override fun run() {
                endTimer();
            }
//        }, it.duration.toLong());
        }, 2000);
    }

    poseNet = PosenetActivity()
    savedInstanceState ?: supportFragmentManager.beginTransaction()
      .replace(R.id.container, poseNet)
      .commit()
  }


  private fun endTimer(){
    val referenceData = resources.openRawResource(R.raw.reference).bufferedReader().use { it.readText() }

    val sendData = JSONObject()
    sendData.put("meta-data", JSONObject().put("name","video1"))
    sendData.put("reference", "REPLACEME")
    sendData.put("patient", poseNet.getJSON())

    val intent = Intent(this, ResultsActivity::class.java).apply {
      putExtra("JSON", sendData.toString(2).replace("\"REPLACEME\"", referenceData))
    }
    startActivity(intent)
  }
}
