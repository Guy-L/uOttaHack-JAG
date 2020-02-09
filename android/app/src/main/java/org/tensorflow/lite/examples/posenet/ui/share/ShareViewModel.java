package org.tensorflow.lite.examples.posenet.ui.share;

import androidx.lifecycle.LiveData;
import androidx.lifecycle.MutableLiveData;
import androidx.lifecycle.ViewModel;

public class ShareViewModel extends ViewModel {

    private MutableLiveData<String> mText;

    public ShareViewModel() {
        mText = new MutableLiveData<>();
        mText.setValue("Thank you for your interest!");
    }

    public LiveData<String> getText() {
        return mText;
    }
}