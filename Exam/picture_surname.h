#ifndef EXAM_PICTURE_SURNAME_H
#define EXAM_PICTURE_SURNAME_H

#include <iostream>
#include <exception>
#include <filesystem>

using namespace std;

class Picture_Surname {
public:
    static string file_name(const string &file_path_full) {
        basic_string<char> result;
        result = file_path_full.substr(0, file_path_full.find_last_of('.'))
                .substr(file_path_full.find_last_of('\\') + 1);
        cout << "Read file: " << result << endl;
        return result;
    }

    static bool file_copy() {
        filesystem::path sourceFile = R"(C:\Users\79967\Desktop\MosPolytech\Prog\C++\Murakhtanov_221-332\image\Source.bmp)";
        filesystem::path targetParent = R"(C:\Users\79967\Desktop\MosPolytech\Prog\C++\Murakhtanov_221-332\image_copy)";

        auto target = targetParent / sourceFile.filename();

        try {
            filesystem::create_directories(targetParent);
            filesystem::copy_file(sourceFile, target, filesystem::copy_options::overwrite_existing);
        }
        catch (exception &e) {
            cout << e.what();
        }
        return false;
    }
};

#endif //EXAM_PICTURE_SURNAME_H
