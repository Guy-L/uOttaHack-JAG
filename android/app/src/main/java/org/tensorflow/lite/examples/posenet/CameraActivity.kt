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

import android.content.Context
import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.widget.VideoView
import androidx.appcompat.app.AppCompatActivity
import org.json.JSONObject
import java.io.*
import java.util.*

class CameraActivity : AppCompatActivity() {
  private lateinit var poseNet: PosenetActivity

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    setContentView(R.layout.activity_camera)

    var videoView = findViewById(R.id.video) as VideoView
    videoView.setVideoURI(Uri.parse("android.resource://" + packageName +"/"+R.raw.ref_3))
    videoView.requestFocus()
    videoView.start()

    videoView.setOnPreparedListener {
        Timer().schedule(object : TimerTask() {
            override fun run() {
                endTimer();
            }
        }, it.duration.toLong())
    }

    poseNet = PosenetActivity()
    savedInstanceState ?: supportFragmentManager.beginTransaction()
      .replace(R.id.container, poseNet)
      .commit()
  }


  private fun endTimer(){
    val sendData = JSONObject()
    sendData.put("meta-data", JSONObject().put("name","video"+getVideoCount()))
    sendData.put("patient", poseNet.getJSON())

    val intent = Intent(this, ResultsActivity::class.java).apply {
      putExtra("JSON", sendData.toString(2))
    }
    startActivity(intent)
  }

  private fun getVideoCount(): Int{
    val curVidCount = readInternalStorage("store.txt")
    writeInternalStorage("store.txt",(curVidCount+1).toString())

    return curVidCount;
  }

  private fun readInternalStorage(filename: String) : Int{
    var fileInputStream: FileInputStream? = null

    try {
      fileInputStream = openFileInput(filename)
      var inputStreamReader: InputStreamReader = InputStreamReader(fileInputStream)
      val bufferedReader: BufferedReader = BufferedReader(inputStreamReader)
      val stringBuilder: StringBuilder = StringBuilder()
      var text: String? = null
      while ({ text = bufferedReader.readLine(); text }() != null) {
        stringBuilder.append(text)
      }

      return stringBuilder.toString().toInt()
    } catch (e: FileNotFoundException){

      writeInternalStorage(filename, "0")
      return 0
    }
  }

  private fun writeInternalStorage(file: String, data: String){
    val fileOutputStream: FileOutputStream
    try {
      fileOutputStream = openFileOutput(file, Context.MODE_PRIVATE)
      fileOutputStream.write(data.toByteArray())
    }catch (e: Exception){
      e.printStackTrace()
    }
  }
}
