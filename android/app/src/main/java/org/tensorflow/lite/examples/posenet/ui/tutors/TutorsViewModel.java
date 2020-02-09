package org.tensorflow.lite.examples.posenet.ui.tutors;

import androidx.lifecycle.LiveData;
import androidx.lifecycle.MutableLiveData;
import androidx.lifecycle.ViewModel;

public class TutorsViewModel extends ViewModel {

    private MutableLiveData<String> mText;

    public TutorsViewModel() {
        mText = new MutableLiveData<>();
        mText.setValue("This is tools fragment");
    }

    public LiveData<String> getText() {
        return mText;
    }
}